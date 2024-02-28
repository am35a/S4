<script>
    import { onMount } from 'svelte'

    import { user } from 'src/store/store'

    onMount(async () => {
        // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
        // console.log(document.querySelectorAll('[color]'))

        document.documentElement.setAttribute('theme', $user.isAuthorized ? $user.settings.theme : 'light')

	})

    $: document.documentElement.setAttribute('theme', $user.settings.theme)

</script>

<svelte:window/>

<style lang="sass" global>
    @layer reset, themes, components
    // utilities are not placed in layers because by default have high priority
</style>