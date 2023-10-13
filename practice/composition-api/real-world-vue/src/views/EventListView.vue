<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices.js'

const events = ref(null)

onMounted(async () => {
  try {
    const response = await EventServices.getEvents()

    if (response.status === 200) {
      events.value = response.data
    } else {
      throw new Error('Failed to fetch')
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
