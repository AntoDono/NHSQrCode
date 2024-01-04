<template>
    <div class="flex justify-center flex-col items-center h-[95vh]">
        <h1 class="text-center text-2xl pt-5 pb-2">NHS QR CODE GENERATOR</h1>
        <h2 class="text-center text-xl pt-0 pb-5">All links are permanent</h2>
        <div>
            <div class="mb-6 flex flex-row items-center gap-x-2">
                <label class="text-2xl"></label>
                <input autocomplete="off" ref="url" placeholder="Paste your link in here" type="text" id="default-input" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5">
            </div>
        </div>
        <div class="text-red-500 pb-4">{{ errorMessage }}</div>
        <button @click="generateQR" class="bg-blue-500 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span class="text-white">Generate QR Code</span>
        </button>
    </div>
</template>

<script setup>

const url = ref(null)
const errorMessage = ref(null)
const router = useRouter()

const isValidUrl = (string)=> {
  let urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return urlRegex.test(string);
}

const generateQR = ()=>{
    let raw_url = url.value.value
    if (!isValidUrl(raw_url)){
        errorMessage.value = "INVALID URL"
    }else{
        router.push(`/qrcode?url=${raw_url}`)
    }
}

</script>