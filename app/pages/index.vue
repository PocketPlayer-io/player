<template>
  <section class="bg-red-400">
    <section class="grid grid-cols-8 gap-3">
      <div v-for="item in 6" class="col-span-4 md:col-span-2">
        <div class="card bg-gray-400 shadow-xl">
          <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>