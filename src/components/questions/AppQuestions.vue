<template>
    <div>
         <div class="text-white text-2xl">
                <div class="flex">
                <span>{{items.id}}.</span>
                <p class="ml-3">{{items.question}}</p>
                </div>
                <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:["items"]
}
</script>