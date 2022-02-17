<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Alert from "src/components/Alert.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Alerts</div>
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Views</div>
        <p>S4 alerts have two main views - standard and alternative.</p>
        <div class="d-grid g-2 overflow-x-auto">
            <div class="d-grid g-2 cols-2">
                <Alert class="alert-primary">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
                <Alert class="alert-secondary">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
                <Alert class="alert-info">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
                <Alert class="alert-success">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
                <Alert class="alert-warning">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
                <Alert class="alert-error">
                    Alert success message with <a href={'#'}>link</a>
                </Alert>
            </div>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>
    </div>

    <div class="d-grid">
        <div class="d-grid">
            <div class="h3" aria-level={3} role="heading">Closeble</div>
            <p>...</p>
            <div class="d-grid g-2 overflow-x-auto">
            <Alert class="alert-success alert-closable">
                Click the close icon in the top right corner to destroy the block of alert message.
            </Alert>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>
    </div>

    <div class="d-grid">
        <div class="d-grid">
            <div class="h3" aria-level={3} role="heading">Style mixed</div>
            <p>...</p>
            <div class="d-grid g-2 overflow-x-auto">
            <Alert class="alert-primary border">
                Border
            </Alert>
            <Alert class="alert-warning border bg-transparent alert-closable">
                Transparent background
            </Alert>
            <Alert class="border bg-transparent color-success">
                Text color
            </Alert>
            <Alert class="bg-error color-positive">
                Text and background color
            </Alert>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>
    </div>

</section>