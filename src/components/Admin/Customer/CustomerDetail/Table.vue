<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-16 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Product</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Category</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Piece</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white">
          <td class="p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5M-zemMg3tFF0cGXRFNhWTZ-QPjp0ivImNTAtBaefdQ&s"
              class="w-[60px] h-[60px] md:w-32 max-w-full max-h-full object-cover rounded-[8px]"
              alt="Apple Watch"
            />
          </td>
          <th class="px-6 py-4 font-semibold text-gray-900">Apple MacBook Pro 17"</th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">3</td>
          <td class="px-6 py-4 font-semibold text-gray-900">$690.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
