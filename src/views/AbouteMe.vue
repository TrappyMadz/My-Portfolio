<script setup lang="ts">
import MyButton from '@/components/MyButton.vue'
import MyProjects from '@/components/MyProjects.vue'
import MySkills from '@/components/MySkills.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import RouterButton from '@/components/RouterButton.vue'
import { Projects } from '@/data/Projects'
import { ref } from 'vue'

const drawerHeight = ref(0)
</script>

<template>
  <main>
    <section id="hero">
      <h1 id="name">> Hello world ! Je suis Simon.</h1>
      <div id="aboutme">
        <img id="me" src="/src/assets/profile.png" alt="My avatar" />
        <p>
          Je suis Simon, étudiant en génie logiciel basé à Pau. Dès avril, je rejoindrai Notipro en
          tant que stagiaire, où je participerai au développement de nouvelles fonctionnalités pour
          une expérience d'apprentissage centrée sur les notifications.
        </p>
      </div>
      <MyButton
        id="knowMore"
        :text="'En savoir plus ↓'"
        :where-to-go="'projects'"
        :color="'#FFFFFF'"
      ></MyButton>
    </section>
    <section id="projects">
      <MyProjects @drawerHeight="drawerHeight = $event"></MyProjects>
    </section>
    <div
      id="afterProjects"
      :style="{
        transform: `translateY(${drawerHeight}px)`,
      }"
    >
      <section id="xp">
        <h2>Mes expériences</h2>
        <table class="xpTable">
          <thead>
            <tr>
              <th>Organisme</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Notipro <br />
                (Pau)
              </td>
              <td>
                Évolution du front-end d'une application Flutter de micro-learning <br />permettant de
                réviser n'importe quel contenu pédagogique directement via des notifications
                interactives.
              </td>
              <td>Avril - Septembre 2026</td>
            </tr>
            <tr>
              <td>
                Compétition IA4Industries <br />
                (Bordeaux)
              </td>
              <td>
                Conception d'un chatbot de support client. <br />Défi technique majeur : <br />
                structurer la documentation pour permettre à l'IA de lire et d'interpréter des arbres
                de décision complexes.
              </td>
              <td>
                Janvier 2026 <br />
                (1 semaine )
              </td>
            </tr>
            <tr>
              <td>
                Haute École de la Province de Liège (HEPL) <br />
                (Belgique)
              </td>
              <td>
                Semestre d'échange international à la HEPL (Liège) au sein du cursus Ingénierie du Jeu
                Vidéo, <br />
                spécialisé dans la conception technique et artistique d'environnements interactifs.
              </td>
              <td>Février - Juin 2025</td>
            </tr>
            <tr>
              <td>
                Meanings for you <br />
                (Pau)
              </td>
              <td>
                Refonte du frontend d'une application de management. <br />
                Harmonisation du design avec celui d'autres applications de l'entreprise.
              </td>
              <td>Juillet - Août 2024</td>
            </tr>
          </tbody>
        </table>
        <MyButton
          id="knowMore"
          :text="'Voir mes compétences ↓'"
          :where-to-go="'myskills'"
          :color="'#FFFFFF'"
        ></MyButton>
      </section>
      <section id="myskills">
        <h2>Mes compétences</h2>
        <MySkills></MySkills>
        <MyButton
          id="knowMore"
          :text="'Voir mes formations ↓'"
          :where-to-go="'classes'"
          :color="'#FFFFFF'"
        ></MyButton>
      </section>
      <section id="classes">
        <h2>Mes formations</h2>
        <table class="xpTable">
          <thead>
            <tr>
              <th>Formation</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CY Tech | Diplôme d'Ingénieur (Spécialisation Cloud Computing)</td>
              <td>
                Formation d'excellence axée sur la conception et le déploiement d'architectures
                distribuées. Expertise approfondie en virtualisation, stratégies DevOps et gestion
                d'infrastructures scalables à haute disponibilité.
              </td>
              <td>Septembre 2023 - Septembre 2026 (Diplôme attendu)</td>
            </tr>
            <tr>
              <td>Clever Cloud | Cloud Concepts 101 - Deployments Essentials Badge</td>
              <td>
                Certification validant la maîtrise des fondamentaux du PaaS : automatisation des
                déploiements via Git, scalabilité horizontale et gestion de la haute disponibilité en
                production.
              </td>
              <td>Mars 2026</td>
            </tr>
            <tr>
              <td>TOEIC | Listening & Reading - Niveau C1 (960/990)</td>
              <td>
                Score d'excellence attestant d'une maîtrise avancée de l'anglais professionnel.
                Capacité démontrée à comprendre des sujets complexes et à interagir avec fluidité dans
                des environnements internationaux et multiculturels.
              </td>
              <td>Décembre 2024</td>
            </tr>
          </tbody>
        </table>
        <MyButton id="router" where-to-go="hobbies" text="Mes loisirs ↓" color="white"></MyButton>
      </section>
      <section id="hobbies">
        <h2>Mes loisirs</h2>
        <MyButton
          id="router"
          where-to-go="contact"
          text="Prendre contact ↓"
          color="white"
        ></MyButton>
      </section>
      <section id="contact">
        <h2>Me contacter</h2>
      </section>
    </div>
  </main>
</template>

<style scoped>
main {
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
}

#hero {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80dvw;
  margin: auto;
  padding-top: 10dvh;
}

#name {
  padding-bottom: 30px;
  font-size: 3vw;
}

#aboutme {
  border-top: 2px solid white;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

#me {
  width: 300px;
  border-radius: 50%;
}

p {
  max-width: 900px;
  font-size: 1.3vw;
}

#knowMore {
  margin-top: auto;
  margin-bottom: 50px;
}

#projects {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#afterProjects {
  transition: transform 0.35s ease;
  will-change: transform;
}

#router {
  width: 20dvw;
  margin-top: auto;
  margin-bottom: 50px;
}

#routerDown {
  width: 20dvw;
  margin: 10px;
}

#routerContainer {
  margin: 50px;
}

#xp {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#xp h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

table.xpTable {
  border: 2px solid #ffffff;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  width: 65dvw;
}
table.xpTable td,
table.xpTable th {
  border-bottom: 2px solid #ffffff;
  padding: 5px 2px;
}
table.xpTable tbody td {
  font-size: 14px;
  padding: 5dvh;
}
table.xpTable thead {
  background: #ffffff;
  border-bottom: 4px solid #333333;
}
table.xpTable thead th {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  border-left: 2px solid #333333;
}
table.xpTable thead th:first-child {
  border-left: none;
}

table.xpTable tfoot td {
  font-size: 14px;
}

#myskills {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#myskills h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

#classes {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#classes h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

#hobbies {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hobbies h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

#contact {
  max-width: 80dvw;
  margin: auto;
  min-height: 100dvh;
  padding-top: 7dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact h2 {
  margin-top: 0;
  padding-bottom: 30px;
}
</style>
