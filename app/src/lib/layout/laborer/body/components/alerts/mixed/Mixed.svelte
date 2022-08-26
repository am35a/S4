<script lang="ts">
    import Alert from 'component/Alert.svelte'
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section>
    <h3>Style mixed</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-4 cols-2 p-4 mb-4 ai-start bgc-positive rounded">
        <Alert class="alert-primary border">
            Alert component with border
        </Alert>
        <Alert class="alert-warning border bgc-transparent alert-closable">
            Transparent background for alert
        </Alert>
        <Alert class="border bgc-transparent color-success">
            Change the text color with killing background color
        </Alert>
        <Alert class="bgc-error color-positive">
            Set custom text and background color
        </Alert>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<Alert class="alert-primary border">
    Alert component with border
</Alert>
<Alert class="alert-warning border bgc-transparent alert-closable">
    Transparent background for alert
</Alert>
<Alert class="border bgc-transparent color-success">
    Change the text color with killing background color
</Alert>
<Alert class="bgc-error color-positive">
    Set custom text and background color
</Alert>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>