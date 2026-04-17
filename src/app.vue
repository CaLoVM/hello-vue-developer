<script setup>
import DeveloperRegistration   from "./greetings/presentation/components/developer-registration.vue";
import {ref} from "vue";

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
  if (dev.fullName !== 'Uknoen')
    developerCount.value++;
}
</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <developer-registration
  @developer-registration="updateRegisteredDeveloperInfo"
  @registration-deferred="updateRegisteredDeveloperInfo"/>
</template>
