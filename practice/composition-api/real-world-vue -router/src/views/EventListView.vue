<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices.js'

const events = ref(null)
const props = defineProps(['page'])
const page = computed(() => props.page)
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2)

  return page.value < totalPages
})

onMounted(async () => {
  watchEffect(async () => {
    events.value = null

    try {
      const response = await EventServices.getEvents(2, page.value)

      if (response.status === 200) {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      } else {
        throw new Error('Failed to fetch')
      }
    } catch (error) {
      console.error(error)
    }
  })
})
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Previous
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
