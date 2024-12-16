import { AlertDialogAction } from './action'
import { AlertDialogCancel } from './cancel'
import { AlertDialogContent } from './content'
import { AlertDialogDescription } from './description'
import { AlertDialogFooter } from './footer'
import { AlertDialogHeader } from './header'
import { AlertDialogRoot } from './root'
import { AlertDialogTitle } from './title'
import { AlertDialogTrigger } from './trigger'

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Header: AlertDialogHeader,
  Title: AlertDialogTitle,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
}
