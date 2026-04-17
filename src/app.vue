<script setup>
import DeveloperRegistration   from "./greetings/presentation/components/developer-registration.vue";
import {ref} from "vue";
import DeveloperCountShow from "./greetings/presentation/components/developer-count-show.vue";
import DeveloperGreeting from "./greetings/presentation/components/developer-greeting.vue";
import {Developer} from "./greetings/domain/model/developer.entify.js";

const firstName = ref('');
const lastName = ref('');
const developerCount=ref(0);
const hasRegistered=ref(false);

function updateRegisteredDeveloperInfo(developer){
  firstName.value=developer.firstName;
  lastName.value=developer.lastName;
  hasRegistered.value=true;
  console.log('Developer registered:',developer);
  updateDeveloperCount(developer);
}

function resetRegisteredDeveloperInfo(){
  firstName.value='';
  lastName.value='';
  hasRegistered.value=false;
  console.log('Registration deferred');
}

function updateDeveloperCount(developer){
  const dev = new Developer(developer.firstName, developer.lastName);
  if (dev.fullName !== 'Unknown')
    developerCount.value++;
}
</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <developer-registration
  @developer-registration="updateRegisteredDeveloperInfo"
  @registration-deferred="updateRegisteredDeveloperInfo"/>
  <developer-greeting
    v-if="hasRegistered"
    :firstName="firstName"
    :lastName="lastName"/>
  <developer-count-show :developer-count="developerCount"/>
</template>
