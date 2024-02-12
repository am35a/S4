<script lang="ts">
    import Input from 'component/Input.svelte'

    export let inputClass: string = ''
</script>

<section>
    <h3 id="range">Range</h3>
    <div class="d-grid g-5">
        <div class="d-flex g-4 fw-wrap jc-evenly p-4 bgc-positive br">
            <div class="d-grid gtc-2 g-3">
                <b class="js-end as-center">Default</b>
                <div>
                    <Input class={inputClass} type="range"/>
                </div>
                <b class="js-end as-center">Active</b>
                <div>
                    <Input class="{inputClass} active" type="range"/>
                </div>
                <b class="js-end as-center">Disabled</b>
                <div>
                    <Input class={inputClass} type="range" disabled/>
                </div>
                <b class="js-end as-center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" type="range" disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>