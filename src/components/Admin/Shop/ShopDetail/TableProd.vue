<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-16 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Product</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Category</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Price</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Piece</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Available</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">
            <span class="sr-only">Edit</span>
          </th>
          <!-- <th scope="col" class="px-6 py-3">Action</th> -->
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5M-zemMg3tFF0cGXRFNhWTZ-QPjp0ivImNTAtBaefdQ&s"
              class="w-[60px] h-[60px] md:w-32 max-w-full max-h-full object-cover rounded-[8px]"
              alt="Apple Watch"
            />
          </td>
          <th class="px-6 py-4 font-semibold text-gray-900">Apple MacBook Pro 17"</th>
          <td class="px-6 py-4">Digital Product</td>
          <td class="px-6 py-4 font-semibold text-gray-900">$690.00</td>
          <td class="px-6 py-4">63</td>
          <td class="px-6 py-4">Black, Pink</td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 hover:underline mr-2">Edit</a>
            <a href="#" class="font-medium text-red-600 hover:underline">Remove</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
