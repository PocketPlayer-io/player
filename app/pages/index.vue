<template>
  <section class="bg-red-400">
    <section class="grid grid-cols-8 gap-3">
      <div v-for="video in videos" class="col-span-4 md:col-span-2">
        <div class="card bg-gray-400 shadow-xl">
          <figure>
            <a :href="'/player?id='+video.youtubeid">
              <img
                  class="aspect-16/9"
                  :src="'https://img.youtube.com/vi/' + video.youtubeid +'/maxresdefault.jpg'"
                  alt="Shoes"/>
            </a>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ video.name }}</h2>
            <div class="card-actions justify-end">
              <button @click="navigateTo('/player?id='+video.youtubeid)" class="btn btn-primary">watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {usePocketBase} from "~/utils/pocketbase";

const videos = ref([]);
const abos = ref([]);
const pb = usePocketBase();
const router = useRouter()

const load = async () => {
  if(!pb.authStore.isValid){
    router.push('/login');
  }
  videos.value = (await pb.collection('videos').getList(1, 12, {
    sort: '-uploaded'
  })).items;
  abos.value = await pb.collection('abos', {
    filter: 'user="' + pb.authStore.record.id + '"'
  }).getFullList(100);
}

onMounted(load)
</script>