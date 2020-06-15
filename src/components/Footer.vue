<template>
    <div class="footer">
        <WorkStatus />  
        <ThemeSwitch />  
    </div>
</template>

<script>
import '@/scss/_footer.scss'
import WorkStatus from "@/components/WorkStatus"
import ThemeSwitch from "@/components/ThemeSwitch"

export default {
    name: 'Footer',
    components: {
        WorkStatus,
        ThemeSwitch
    }
}
</script>