<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Button from "src/components/Button.svelte"
    import ButtonGroup from "src/components/ButtonGroup.svelte"
    import Precode from "src/components/Precode.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Buttons group</div>
    <div class="d-grid g-2">
        <div>
            <ButtonGroup>
                <Button class="btn-primary">Primary</Button>
                <Button class="btn-primary">Primary</Button>
                <Button class="btn-primary">Primary</Button>
            </ButtonGroup>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
</section>