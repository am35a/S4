<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section class="d-grid g-2">
    <h3>Default</h3>
    <p>S4 alerts default views.</p>
    <div class="d-grid g-2 cols-2 p-2 bg-positive rounded-md">
        <Alert class="alert-primary">
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
        </Alert>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
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