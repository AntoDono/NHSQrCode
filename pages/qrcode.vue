<template>
    <div class="flex justify-center flex-col">
        <h1 class="text-2xl text-center p-10">Generated QR Code</h1>
        <div class="w-full flex items-center justify-center flex-col p-5">
            <div ref="qr" class="w-fit relative">
                <div class="p-2">
                    <QrcodeVue class="z-0" :value="url" :size="300" leve="H"/>
                    <div class="centered-image" ref="logo">
                        <div class="p-2 bg-blue-500 w-fit rounded">
                            <img class="w-20" src="~/assets/images/nhslogo.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center gap-x-4">
            <button class="bg-blue-500 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" @click="SaveQR">
                <svg class="fill-white w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span class="text-white">Download</span>
            </button>
            <NuxtLink to="/" class="bg-blue-500 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span class="text-white">Back</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'
import html2canvas from 'html2canvas'

const route = useRoute()

const url = ref(null)
const qr = ref(null)
const logo = ref(null)

const downloadURI = (uri, name) => {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}

const getDateTime = ()=>{
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    return date+'-'+time;
}

const handleDownload = (canvas)=>{
    let img = canvas.toDataURL()
    downloadURI(img, `NHS-QR-${getDateTime()}`)
}

const SaveQR = ()=>{
    html2canvas((qr.value)).then(handleDownload)
}

onMounted(()=>{
    url.value = route.query.url
})

</script>


<style>
.centered-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Adjust width and height as needed */
    width: 100px;
    height: 100px;
}
</style>