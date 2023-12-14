<script lang="ts">
    import { onMount } from 'svelte'

    onMount(() => {
        // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
        // console.log(document.querySelectorAll('[color]'))

        document.documentElement.setAttribute('theme', 'dark')
	})

</script>

<svelte:window/>