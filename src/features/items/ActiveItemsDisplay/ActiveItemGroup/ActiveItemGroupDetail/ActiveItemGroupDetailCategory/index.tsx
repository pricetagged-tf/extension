import { type FC } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import { Icon } from '@iconify/react'
import StyledQualityColoredActionRowLikeButton from '../../StyledQualityColoredActionRowLikeButton'

type ActiveItemGroupDetailCategoryProps = {
  title: string
  children: React.ReactNode
}

const ActiveItemGroupDetailCategory: FC<ActiveItemGroupDetailCategoryProps> = ({
  children,
  title,
}) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="group/detail w-full">
        <StyledQualityColoredActionRowLikeButton
          quality={15}
          variant="transparent"
          size="xl"
          title={title}
          children={
            <>
              <div className="flex-1 flex justify-end" />

              <Icon
                icon="ph:caret-down"
                className="text-xl group-data-[state=open]/detail:-rotate-180 transition"
              />
            </>
          }
        />
        <div className="h-2" />
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  )
}

export default ActiveItemGroupDetailCategory
