<script lang="ts">
    import Alert from "src/components/Alert.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<div class="d-grid">
    <h3>Closeble</h3>
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
