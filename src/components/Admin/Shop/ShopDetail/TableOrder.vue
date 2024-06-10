<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <!-- <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th> -->
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Name</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Address</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Date</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Price</th>
          <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Status</th>
          <!-- <th scope="col" class="px-6 py-3 text-body-2-bold text-secondary-blue">Action</th> -->
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white hover:bg-gray-50" onclick="location.href='/admin/order/{{ orderId }}'">
          <!-- <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-2"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
            </div>
          </td> -->
          <th
            scope="row"
            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="text-base font-semibold">Thomas Lean</div>
          </th>
          <td class="px-6 py-4">089 Kutch Green Apt. 448</td>
          <td class="px-6 py-4">14 Feb 2019</td>
          <td class="px-6 py-4 text-base font-semibold">3 đ</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-secondary-green me-2"></div>
              Completed
            </div>
          </td>
          <!-- <td class="px-6 py-4">
            <a href="/admin/order/:orderId" class="font-medium text-blue-600 hover:underline"
              >Edit</a
            >
          </td> -->
        </tr>
        <tr class="bg-white hover:bg-gray-50" onclick="location.href='/admin/order/{{ orderId }}'">
          <th
            scope="row"
            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="text-base font-semibold">Leslie Livingston</div>
          </th>
          <td class="px-6 py-4">979 Immanuel Ferry Suite 526</td>
          <td class="px-6 py-4">14 Feb 2019</td>
          <td class="px-6 py-4 text-base font-semibold">100 đ</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-secondary-red me-2"></div>
              Rejected
            </div>
          </td>
        </tr>
        <tr class="bg-white hover:bg-gray-50" onclick="location.href='/admin/order/{{ orderId }}'">
          <th
            scope="row"
            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="text-base font-semibold">Leslie Livingston</div>
          </th>
          <td class="px-6 py-4">979 Immanuel Ferry Suite 526</td>
          <td class="px-6 py-4">14 Feb 2019</td>
          <td class="px-6 py-4 text-base font-semibold">2 đ</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-secondary-blue me-2"></div>
              Processing
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
