<template>
  <div class="flex items-center justify-between">
    <!-- Help text -->
    <span class="text-sm text-gray-700">
      Showing <span class="font-semibold text-gray-900">1</span> to
      <span class="font-semibold text-gray-900">10</span> of
      <span class="font-semibold text-gray-900">100</span> Entries
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
      <!-- Buttons -->
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-s hover:bg-gray-100"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Prev
      </button>
      <button
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100"
      >
        Next
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
