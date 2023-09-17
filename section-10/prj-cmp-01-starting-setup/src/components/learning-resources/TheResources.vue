<template>
  <base-card>
    <base-button @click="setCurrentSelectedTab('stored-resources')" :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setCurrentSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>

  <keep-alive>
    <component :is="currentSelectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    AddResource,
    StoredResources,
  },

  data() {
    return {
      currentSelectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vuejs guide to learn',
          link: 'https://vuejs.org/',
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Google Search',
          link: 'https://www.google.com/',
        },
      ],
    };
  },

  computed: {
    storedResButtonMode() {
      return this.currentSelectedTab === 'stored-resources' ? null : 'flat';
    },

    addResButtonMode() {
      return this.currentSelectedTab === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setCurrentSelectedTab(tab) {
      this.currentSelectedTab = tab;
    },

    addResource(newResource) {
      const resource = {
        id: new Date().toISOString(),
        title: newResource.enteredTitle,
        description: newResource.enteredDescription,
        link: newResource.enteredLink,
      };

      this.storedResources.unshift(resource);
      this.currentSelectedTab = 'stored-resources';
    },

    removeResource(resourceId) {
      const indexOf = this.storedResources.findIndex((res) => res.id === resourceId);
      this.storedResources.splice(indexOf, 1);
    },
  },

  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>
