<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<div class="d-grid g-2">
    <h3>Style mixed</h3>
    <p>...</p>
    <div class="d-grid g-2 cols-2 p-2 bg-positive br">
        <Alert class="alert-primary border">
            Alert component with border
        </Alert>
        <Alert class="alert-warning border bg-transparent alert-closable">
            Transparent background for alert
        </Alert>
        <Alert class="border bg-transparent color-success">
            Change the text color with killing background color
        </Alert>
        <Alert class="bg-error color-positive">
            Set custom text and background color
        </Alert>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="btr-0">
                {
`<Alert class="alert-primary border">
    Alert component with border
</Alert>
<Alert class="alert-warning border bg-transparent alert-closable">
    Transparent background for alert
</Alert>
<Alert class="border bg-transparent color-success">
    Change the text color with killing background color
</Alert>
<Alert class="bg-error color-positive">
    Set custom text and background color
</Alert>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>