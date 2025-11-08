<template>
  <form @submit.prevent="login()">
    <label class="floating-label">
      <span>Your Email</span>
      <input v-model="tmp.email" type="email" class="input input-md"/>
    </label>
    <label class="floating-label mt-6">
      <span>Your Password</span>
      <input v-model="tmp.password" type="password" class="input input-md"/>
    </label>
    <button type="submit" class="btn btn-primary">login</button>
  </form>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const tmp = ref({
  email: '',
  password: ''
});
const router = useRouter();
const pb = usePocketBase();

const login = async () => {
  await pb.collection('users').authWithPassword(tmp.value.email, tmp.value.password);
  console.log(pb.authStore.isValid);
  if (pb.authStore.isValid) {
    router.push('/');
  }
}

onMounted(()=>{
  if(pb.authStore.isValid){
    router.push('/');
  }
})
</script>