<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

// 1. Définition du type pour nos cartes
interface HobbyCard {
  id: number
  title: string
  desc: string
  x: number
  y: number
  z: number
}

// 2. Les données de tes loisirs
const cards = ref<HobbyCard[]>([
  {
    id: 1,
    title: 'Jeux de sociétés',
    desc: 'en équipe',
    x: 50, // Position de départ X
    y: 50, // Position de départ Y
    z: 1   // Ordre d'empilement
  },
  {
    id: 2,
    title: 'Jeux vidéos',
    desc: 'Stratégie / Réflexion',
    x: 400,
    y: 80,
    z: 2
  },
  {
    id: 3,
    title: 'Jeux de cartes',
    desc: 'Première place dans un tournois local pour le jeu de cartes “Pokémon” en 2023 / Participation aux régionaux 2022 de “Yu-Gi-Oh!”',
    x: 200,
    y: 250,
    z: 3
  }
])

// 3. Variables d'état pour le Drag & Drop
const playmatRef = ref<HTMLElement | null>(null)
const draggedCardId = ref<number | null>(null)
const topZIndex = ref(3) // Garde en mémoire le z-index le plus haut
const dragOffset = ref({ x: 0, y: 0 })

// 4. La logique de saisie (Grab)
const startDrag = (event: MouseEvent, card: HobbyCard) => {
  event.preventDefault() // Empêche la sélection de texte accidentelle
  
  draggedCardId.value = card.id
  
  // La carte cliquée passe tout au-dessus
  topZIndex.value++
  card.z = topZIndex.value

  // Calcule l'endroit exact où la souris a cliqué DANS la carte
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }

  // On écoute le mouvement sur tout le document pour ne pas "perdre" la carte si on bouge trop vite
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

// 5. La logique de déplacement (Drag)
const onDrag = (event: MouseEvent) => {
  if (draggedCardId.value === null || !playmatRef.value) return

  const card = cards.value.find(c => c.id === draggedCardId.value)
  if (card) {
    // Récupère la position du tapis par rapport à l'écran
    const matRect = playmatRef.value.getBoundingClientRect()
    
    // Met à jour la position de la carte (souris - position du tapis - offset du clic interne)
    card.x = event.clientX - matRect.left - dragOffset.value.x
    card.y = event.clientY - matRect.top - dragOffset.value.y
  }
}

// 6. La logique de relâchement (Drop)
const stopDrag = () => {
  draggedCardId.value = null
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

// Nettoyage de sécurité si le composant est détruit pendant un drag
onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
})
</script>

<template>
  <section class="hobbies-section">
    
    <div class="playmat" ref="playmatRef">
      
      <div
        v-for="card in cards"
        :key="card.id"
        class="dragg-card"
        :class="{ 'is-dragging': draggedCardId === card.id }"
        :style="{
          left: `${card.x}px`,
          top: `${card.y}px`,
          zIndex: card.z
        }"
        @mousedown="startDrag($event, card)"
      >
        <div class="card-inner">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-desc">{{ card.desc }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.hobbies-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

h2 {
  font-family: 'Google Sans Code', monospace;
  color: white;
  margin-bottom: 30px;
}

/* --- Le Tapis de Jeu --- */
.playmat {

  width: 80dvw;
  height: 600px; /* Assez grand pour balader les cartes */
  background: radial-gradient(circle at center, #3b2354 0%, #1f112e 100%);
  border: 2px dashed rgba(168, 85, 247, 0.5);
  border-radius: 12px;
  position: relative;
  overflow: hidden; /* Empêche les cartes de sortir du tapis visuellement */
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}

/* --- La Carte --- */
.dragg-card {
  position: absolute;
  width: 300px;
  height: 350px;
  /* Style inspiré de tes captures d'écran : bordure grise 3D */
  background-color: #c7c7c7;;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 
    4px 4px 10px rgba(0, 0, 0, 0.5),
    inset -2px -2px 6px rgba(0, 0, 0, 0.4),
    inset 2px 2px 6px rgba(255, 255, 255, 0.4);
  cursor: grab;
  user-select: none; /* Empêche de surligner le texte en glissant */
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  
}

/* Le fond violet à l'intérieur de la carte */
.card-inner {
  background-color: #795f8a;
  border: 2px solid #2d1b42;
  padding: 20px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-title {
  margin: 0 0 15px 0;
  color: #000000;
  font-family: monospace;
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  width: 100%;
}

.card-desc {
  margin: 0;
  color: #1a1a1a;
  font-family: monospace;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* --- L'état "Pendant le Drag" --- */
.dragg-card.is-dragging {
  cursor: grabbing;
  transform: scale(1.05) rotate(2deg); /* Petit effet de soulèvement */
  box-shadow: 
    15px 15px 25px rgba(0, 0, 0, 0.6),
    inset -2px -2px 6px rgba(0, 0, 0, 0.4),
    inset 2px 2px 6px rgba(255, 255, 255, 0.4);
}
</style>