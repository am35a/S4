<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'

    let alertClasses: string = ''
</script>

<section>
    <h3 id="mixed">Style mixed</h3>
    <p>
        <b>Alert</b> can be differently customized. It is enough to create an empty <b>Alert</b> component and start filling the class tag with a necessary utilities classes.
    </p>
    <div class="d-grid g-3 mb-4 p-3 bgc-positive rounded">
        <div class="d-grid">
            <label for="containerClasses">Container classes:</label>
            <input
                id="containerClasses"
                class="border"
                bind:value={alertClasses}
                type="text"
                placeholder="type classes"
            >
        </div>
        <div>
            <Alert class="mb-0 {alertClasses}">
                The {alertClasses ? 'custom' : 'clear'} alert component <a href={'#'}>link</a>
            </Alert>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<Alert class="${alertClasses}">
    ...
</Alert>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>