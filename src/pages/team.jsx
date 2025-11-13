import PageHeader from '@/components/sections/pageHeader'

import TeamGrid from '@/components/sections/team/teamGrid'
import React from 'react'

const Team = () => {
    return (
        <>
            <PageHeader
                className={"sbg-1"}
                currentPage={"Our Team"}
                title={"Our Team"}
            />
            <TeamGrid/>
        </>
    )
}

export default Team