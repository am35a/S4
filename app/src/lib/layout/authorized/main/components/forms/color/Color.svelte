<script lang="ts">
    import Input from 'component/Input.svelte'

    export let inputClass: string = ''
</script>

<section>
    <h3 id="color">Color</h3>
    <div class="d-grid g-5">
        <div class="d-flex g-4 fw-wrap justify-content--evenly p-4 background-color--positive br-md">
            <div class="d-grid gtc-2 g-3">
                <b class="justify-self--end align-self--center">Default</b>
                <div>
                    <Input class={inputClass} value="#00cc00" type="color"/>
                </div>
                <b class="justify-self--end align-self--center">Active</b>
                <div>
                    <Input class="{inputClass} active" value="#00cc00" type="color"/>
                </div>
                <b class="justify-self--end align-self--center">Disabled</b>
                <div>
                    <Input class={inputClass} type="color" value="#00cc00" disabled/>
                </div>
                <b class="justify-self--end align-self--center">Active & Disabled</b>
                <div>
                    <Input class="{inputClass} active" value="#00cc00" type="color" disabled/>
                </div>
            </div>
        </div>        
    </div>
</section>