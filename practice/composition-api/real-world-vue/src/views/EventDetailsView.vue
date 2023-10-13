<script setup>
import { ref, onMounted, defineProps } from 'vue'
import EventServices from '@/services/EventServices.js'

const event = ref(null)
const { id: eventId } = defineProps(['id'])

onMounted(async () => {
  try {
    const response = await EventServices.getEvent(eventId)

    if (response.status === 200) {
      event.value = response.data
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
