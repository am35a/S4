<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Precode from "src/components/Precode.svelte"
    import Button from "src/components/Button.svelte"
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Icons</div>
    <p>Lightweight responsive vector icons with cache available.</p>
    <div class="d-b-grid g-4 p-2 bg-positive rounded-md">
        <div style="min-height: calc(var(--key-size) * 10)">
            <Icon name="ghost"/>
        </div>
        <div class="d-i-flex flex-nowrap g-2 border-bottom pb-2">
            <Button class="btn-secondary">Auto</Button>
            <Button class="btn-secondary">Small</Button>
            <Button class="btn-secondary">Mediun</Button>
            <Button class="btn-secondary">Large</Button>
        </div>
        <Precode>
            {`<Icon name="ghost" size="lg"/>`}
        </Precode>
    </div>
</section>
