<template>

    <vue-word-cloud :words="words">
        <template slot-scope="{text, weight, word}">
            <div :title="weight" style="cursor: pointer;" @click="onWordClick(word)">
                 {{ text }}
            </div>
        </template>
    </vue-word-cloud>

</template>

<script>
import VueWordCloud from 'vuewordcloud';

export default {
    data: () => ({
        words: [['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]],
    }),
    components: {
        VueWordCloud
    }
}
</script>
