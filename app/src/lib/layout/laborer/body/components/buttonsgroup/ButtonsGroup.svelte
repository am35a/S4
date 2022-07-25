<script lang="ts">
    import Icon from "component/Icon.svelte"
    import Button from "component/Button.svelte"
    import ButtonGroup from "component/ButtonGroup.svelte"
    import Precode from "component/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Buttons group</div>
    <div class="d-grid g-2">
        <div>
            <ButtonGroup>
                <Button class="btn-primary">Default</Button>
                <Button class="btn-primary active">Active</Button>
                <Button class="btn-primary" disabled>Disabled</Button>
                <Button class="btn-primary active" disabled>Disabled</Button>
            </ButtonGroup>
        </div>
        <div>
            <ButtonGroup>
                <Button class="btn-alt-primary border">Default</Button>
                <Button class="btn-alt-primary border active">Active</Button>
                <Button class="btn-alt-primary border" disabled>Disabled</Button>
                <Button class="btn-alt-primary border active" disabled>Disabled</Button>
            </ButtonGroup>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
</section>