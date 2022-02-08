<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Alert from "src/components/Alert.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Alerts</div>
    <div class="d-grid g-2">
        <div>
            <Alert class="alert-success">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo deserunt et commodi quae sapiente, quasi eius consequuntur omnis nostrum. Quibusdam itaque totam laborum voluptatibus eaque inventore maxime velit porro architecto.
            </Alert>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
</section>