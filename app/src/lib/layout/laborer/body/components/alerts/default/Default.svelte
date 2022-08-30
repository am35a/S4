<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3 id="default">Default</h3>
    <p>
        S4 alerts default views.
    </p>
    <div class="d-grid g-3 cols-2 ai-start mb-4 p-3 bgc-positive br">
        <Alert class="alert-primary mb-0">
            Alert primary message with <a href={'#'}>link</a>
        </Alert>
        <Alert class="alert-secondary mb-0">
            Alert secondary message with <a href={'#'}>link</a>
        </Alert>
        <Alert class="alert-info mb-0">
            Alert info message with <a href={'#'}>link</a>
        </Alert>
        <Alert class="alert-success mb-0">
            Alert success message with <a href={'#'}>link</a>
        </Alert>
        <Alert class="alert-warning mb-0">
            Alert warning message with <a href={'#'}>link</a>
        </Alert>
        <Alert class="alert-error mb-0">
            Alert error message with <a href={'#'}>link</a>
        </Alert>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="br-top-0">
                {
`<Alert class="alert-primary">
    Alert primary message with <a href={'#'}>link</a>
</Alert>
<Alert class="alert-secondary">
    Alert secondary message with <a href={'#'}>link</a>
</Alert>
<Alert class="alert-info">
    Alert info message with <a href={'#'}>link</a>
</Alert>
<Alert class="alert-success">
    Alert success message with <a href={'#'}>link</a>
</Alert>
<Alert class="alert-warning">
    Alert warning message with <a href={'#'}>link</a>
</Alert>
<Alert class="alert-error">
    Alert error message with <a href={'#'}>link</a>
</Alert>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>