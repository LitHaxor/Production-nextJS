import { Button, Pane, SmallPlusIcon } from 'evergreen-ui'
import React, { FC } from 'react'

const FolderList:FC<{folders: any[]}> = ({folders}) => {
    return (
       <Pane>
           <Button iconBefore={SmallPlusIcon} appearance="minimal" height={48}>
               New Folder
           </Button>
       </Pane>
    )
}
FolderList.defaultProps = {
    folders: []
}

export default FolderList

