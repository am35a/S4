<script lang="ts">
    import Icon from "src/components/Icon.svelte"
    import Button from "src/components/Button.svelte"
    import Precode from "src/components/Precode.svelte"

    let buttonsName = {
        primary: 'Primary',
        secondary: 'Secondary',
        info: 'Info',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        positive: 'Positive',
        negative: 'Negative'
    }
</script>

<section>
    <div class="h2" aria-level={2} role="heading">Buttons</div>
    <div class="d-grid g-4">
        <div class="h3" aria-level={3} role="heading">Типы</div>
        <p>Кнопки S4 имею два основных типа, от которых можно получить совершенно совершенно разные типы.</p>
        <div class="d-grid g-2 overflow-x-auto">
            <div class="h4" aria-level={4} role="heading">Standard</div>
            <div class="d-grid grid-flow-col g-2 text-nowrap w-max justify-items-start">
                <div class="d-grid rows-5 g-2">
                    <div class="fw-600 fs-s2 d-grid">
                        <span class="row-span-full col-span-full mt-auto mr-auto">State</span>
                        <div class="row-span-full col-span-full m-auto">\</div>
                        <span class="row-span-full col-span-full ml-auto mb-auto">Color</span>
                    </div>
                    <div class="fw-600 my-auto ml-auto">Default</div>
                    <div class="fw-600 my-auto ml-auto">Active</div>
                    <div class="fw-600 my-auto ml-auto">Disabled</div>
                    <div class="fw-600 my-auto ml-auto">Act + Dis</div>
                </div>
                {#each Object.entries(buttonsName) as [key, value]}
                    <div class="d-grid rows-5 g-2">
                        <div class="fw-600 m-auto">{value}</div>
                        <Button class="btn-{key}">{value}</Button>
                        <Button class="btn-{key} active">{value}</Button>
                        <Button class="btn-{key}" disabled>{value}</Button>
                        <Button class="btn-{key} active" disabled>{value}</Button>
                    </div>
                {/each}
            </div>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>

        <div class="d-grid g-2 overflow-x-auto">
            <div class="h4" aria-level={4} role="heading">Alternative</div>
            <div class="d-grid grid-flow-col g-2 text-nowrap w-max justify-items-start">
                <div class="d-grid rows-5 g-2">
                    <div class="fw-600 fs-s2 d-grid">
                        <span class="row-span-full col-span-full mt-auto mr-auto">State</span>
                        <div class="row-span-full col-span-full m-auto">\</div>
                        <span class="row-span-full col-span-full ml-auto mb-auto">Color</span>
                    </div>
                    <div class="fw-600 my-auto ml-auto">Default</div>
                    <div class="fw-600 my-auto ml-auto">Active</div>
                    <div class="fw-600 my-auto ml-auto">Disabled</div>
                    <div class="fw-600 my-auto ml-auto">Act + Dis</div>
                </div>
                {#each Object.entries(buttonsName) as [key, value]}
                    <div class="d-grid rows-5 g-2">
                        <div class="fw-600 m-auto">{value}</div>
                        <Button class="btn-alt-{key}">{value}</Button>
                        <Button class="btn-alt-{key} active">{value}</Button>
                        <Button class="btn-alt-{key}" disabled>{value}</Button>
                        <Button class="btn-alt-{key} active" disabled>{value}</Button>
                    </div>
                {/each}
            </div>
            <Precode>
                {
`...`
                }
            </Precode>
        </div>
    </div>
    
</section>