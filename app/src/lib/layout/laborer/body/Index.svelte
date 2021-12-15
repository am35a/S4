<script lang="ts">
    import Button from 'src/components/Button.svelte'

    import Icon from 'src/components/Icon.svelte'
</script>

<div class="body">
    <div class="d-i-grid g-2 p-4">
        <Button class="btn btn-secondary">
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary active">
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
        <Button class="btn btn-secondary" disabled>
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>        
        <Button class="btn btn-secondary active" disabled>
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
    </div>
    <div class="d-i-grid g-2 p-4">
        <Button class="btn btn-link-primary">
            <Icon class="text-warning ico-sm" name={'ghost'}/>
            Button
        </Button>
        <Button class="btn btn-link-primary active">
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary" disabled>
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
        <Button class="btn btn-link-primary active" disabled>
            <Icon name={'ghost'} size="sm"/>
            Button
        </Button>
    </div>

    <hr>

    <div class="h1" aria-level={1} role="heading">Colors</div>
    <div class="p-4">
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-90);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-80);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-70);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-60);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-50);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-40);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-30);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-20);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--positive-color-10);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-90);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-80);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-70);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-60);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-50);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-40);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-30);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-20);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--negative-color-10);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--primary-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--secondary-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--info-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--success-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--warning-color-d);"></div>
        <div></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color-l);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color);"></div>
        <div class="d-i-flow" style="width: 2rem; height: 2rem; background-color: var(--error-color-d);"></div>
    </div>
</div>

<style lang="sass">
    .body
        grid-column: 2/3
        grid-row: 2/3
        position: relative
        overflow: auto
        z-index: 1
</style>