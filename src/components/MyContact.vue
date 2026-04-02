<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  subject: '',
  message: '',
  _gotcha: ''
})

const isSubmitting = ref(false)
const statusMessage = ref({ text: '', type: '' }) 

const submitForm = async () => {
  isSubmitting.value = true
  statusMessage.value = { text: '', type: '' }

  try {
    const response = await fetch('https://formspree.io/f/xkopvqlq', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      statusMessage.value = { text: 'Message envoyé avec succès ! Je vous réponds vite.', type: 'success' }
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      throw new Error('Erreur API')
    }
  } catch (error) {
    statusMessage.value = { text: "Oups ! Une erreur est survenue lors de l'envoi.", type: 'error' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="contact-section">
    <div class="form-container">
      <h2>Me Contacter</h2>
      <p class="subtitle">Une question, une opportunité ou un projet ? N'hésitez pas !</p>

      <form @submit.prevent="submitForm" class="contact-form">
        
        <div class="input-group">
          <label for="email">Votre Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            placeholder="vous@exemple.com"
          >
        </div>

        <div class="input-group">
          <label for="subject">Objet</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            required 
            placeholder="Sujet de votre message"
          >
        </div>

        <div class="input-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            rows="5" 
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>

        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
        </button>

        <Transition name="fade">
          <div v-if="statusMessage.text" :class="['status-box', statusMessage.type]">
            {{ statusMessage.text }}
          </div>
        </Transition>
        <input type="text" name="_gotcha" v-model="form._gotcha" style="display:none" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  min-height: 80vh;
}

.form-container {
  width: 100%;
  max-width: 700px; /* Ajusté : le juste milieu */
  background: rgba(45, 27, 66, 0.4);
  backdrop-filter: blur(10px);
  padding: 50px; /* Ajusté */
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
}

h2 {
  margin-top: 0;
  font-family: 'Google Sans Code', monospace;
  color: white;
  text-align: center;
  margin-bottom: 12px;
  font-size: 2.2rem; /* Ajusté */
}

.subtitle {
  text-align: center;
  color: #b3b3b3;
  margin-bottom: 35px;
  font-family: monospace;
  font-size: 1.1rem; /* Ajusté */
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 25px; /* Ajusté */
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  color: #e0e0e0;
  font-family: monospace;
  font-size: 1.1rem; /* Ajusté */
  font-weight: bold;
}

input, textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 14px 18px; /* Ajusté */
  color: white;
  font-family: 'Google Sans Code', monospace, sans-serif;
  font-size: 1.1rem; /* Ajusté */
  transition: all 0.3s ease;
}

input::placeholder, textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

input:focus, textarea:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.25);
  background: rgba(255, 255, 255, 0.1);
}

textarea {
  resize: vertical;
  min-height: 150px; /* Ajusté */
}

.submit-btn {
  margin-top: 10px;
  background-color: #a855f7;
  color: white;
  border: none;
  padding: 16px; /* Ajusté */
  border-radius: 8px;
  font-size: 1.2rem; /* Ajusté */
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: monospace;
  letter-spacing: 1px;
}

.submit-btn:hover:not(:disabled) {
  background-color: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(168, 85, 247, 0.4);
}

.submit-btn:disabled {
  background-color: #555;
  cursor: not-allowed;
  opacity: 0.7;
}

.status-box {
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.05rem;
}

.success {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
  border: 1px solid #4ade80;
}

.error {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
  border: 1px solid #f87171;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .form-container {
    padding: 30px 20px;
  }
  h2 {
    font-size: 1.8rem;
  }
  .subtitle, label, input, textarea, .submit-btn {
    font-size: 1rem;
  }
}
</style>