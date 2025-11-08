<template>
  <section class="bg-red-400">
    <section class="grid grid-cols-8 gap-3">
      <div v-for="item in 12" class="col-span-4 md:col-span-2">
        <div class="card bg-gray-400 shadow-xl">
          <figure>
            <img
                class="aspect-16/9"
                src="https://img.youtube.com/vi/ZlfoKo1Li54/maxresdefault.jpg"
                alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">watch</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>