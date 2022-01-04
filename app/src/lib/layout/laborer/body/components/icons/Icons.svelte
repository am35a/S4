<script lang="ts">
    import Icon from "src/components/Icon.svelte"
</script>

<div class="h2" aria-level={2} role="heading">Icons</div>

<div class="d-i-grid grid-flow-col g-4">
    <div>
        <div>Size small</div>
        <Icon name="ghost" size="sm"/>
    </div>
    <div>
        <div>Size medium</div>
        <Icon name="ghost" size="md"/>
    </div>
    <div>
        <div>Size large</div>
        <Icon name="ghost" size="lg"/>
    </div>
</div>