<script lang="ts">
    import Alert from "src/components/Alert.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<div class="d-grid">
    <h3>Default</h3>
    <p>S4 alerts have two main default views - standard and alternative.</p>
    <div class="d-grid g-2 overflow-x-auto">
        <div class="d-grid g-2 cols-2">
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
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
</div>