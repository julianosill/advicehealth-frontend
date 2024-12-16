import { FormControl } from './control'
import { FormDescription } from './description'
import { FormField } from './field'
import { FormWrapper } from './form-wrapper'
import { FormItem } from './item'
import { FormLabel } from './label'
import { FormMessage } from './message'
import { FormRoot } from './root'
import { useFormField } from './use-form-field'

export const Form = {
  Root: FormRoot,
  Wrapper: FormWrapper,
  Control: FormControl,
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Message: FormMessage,
  Description: FormDescription,
  useFormField,
}
