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
    <div class="d-grid">
        <div class="h3" aria-level={3} role="heading">Внешний вид</div>
        <p>Кнопки S4 имею два основных вида - стандартный и альтернативный. От этих видов можно получить любой другой вид кнопок.</p>
        <div class="d-grid g-2 overflow-x-auto">
            <div class="h4" aria-level={4} role="heading">Standard</div>
            <div class="d-inline-grid grid-flow-col g-2 text-nowrap max-w-fit justify-items-start overflow-x-auto rounded-md">
                <div class="d-grid rows-5 g-2 px-2 position-sticky left-0 bg-positive rounded-md">
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

        <div class="d-grid g-2">
            <div class="h4" aria-level={4} role="heading">Alternative</div>
            <div class="d-inline-grid grid-flow-col g-2 text-nowrap max-w-fit justify-items-start overflow-x-auto rounded-md">
                <div class="d-grid rows-5 g-2 px-2 position-sticky left-0 bg-positive rounded-md">
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

    <div>

        <button style="display: inline-flex;height: 30px;grid-auto-flow: column;">
            <div class="bg-success" style="height: 100%;/*! width: 10px; */aspect-ratio: 1;"></div>
            text
        </button>
        <!-- <img src="http://localhost:5000/icons/ghost.svg"> -->
        <p>Альтернативная <Icon name="ghost"/> с обводкой</p>
        <Button class="btn-alt-primary border" type="button">Primary</Button>
        <Button class="btn-sm btn-alt-primary border" type="button"><Icon name="ghost"/>Primary</Button>
        <Button class="btn-alt-primary border" type="button"><Icon name="ghost"/>Primary</Button>
        <Button class="btn-lg btn-alt-primary border" type="button"><Icon name="ghost"/>Primary</Button>

    </div>
    
</section>