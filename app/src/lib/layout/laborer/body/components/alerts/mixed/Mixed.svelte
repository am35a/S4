<script lang="ts">
    import Alert from "src/components/Alert.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<div class="d-grid">
    <h3>Style mixed</h3>
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
