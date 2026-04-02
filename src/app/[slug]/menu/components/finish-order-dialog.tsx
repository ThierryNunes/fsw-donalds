"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ConsumptionMethod } from "@prisma/client"
import { Loader2Icon } from "lucide-react"
import { useParams, useSearchParams } from "next/navigation"
import { useContext, useTransition } from "react"
import { useForm } from "react-hook-form"
import { PatternFormat } from "react-number-format"
import { toast } from "sonner"
import { z } from "zod"

import { createOrder } from "@/actions/create-order"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CartContext } from "@/contexts/cart"
import { isValidCPF } from "@/utils/constants"

const formSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório."),
  cpf: z
    .string()
    .trim()
    .min(1, "CPF é obrigatório.")
    .refine((value) => isValidCPF(value), "CPF inválido."),
})

type FormSchema = z.infer<typeof formSchema>

interface FinishOrderDialogProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
}

const FinishOrderDialog = ({ open, onOpenChange }: FinishOrderDialogProps) => {
  const searchParams = useSearchParams()
  const { slug } = useParams<{ slug: string }>()
  const { products } = useContext(CartContext)
  const [isPending, startTransition] = useTransition()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
    },
    // limpa o estado ao fechar
    shouldUnregister: true,
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      const consumptionMethod = searchParams.get(
        "consumptionMethod",
      ) as ConsumptionMethod
      // Transition de loading no button de finalizar pedido
      startTransition(async () => {
        await createOrder({
          consumptionMethod,
          customerCpf: data.cpf,
          customerName: data.name,
          products,
          slug,
        })

        onOpenChange(false)
        toast.success("Pedido finalizado com sucesso!")
      })
    } catch (error) {
      console.log(error)
      toast.error("Ocorreu um erro ao finalizar pedido. Tente novamente.")
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quase lá!</DrawerTitle>
          <DrawerDescription>
            Para finalizar o seu pedido, insira os seus dados abaixo.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome..."
                        className="rounded-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu CPF</FormLabel>
                    <FormControl>
                      <PatternFormat
                        placeholder="Digite seu CPF..."
                        format="###.###.###-##"
                        className="rounded-full"
                        customInput={Input}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter className="flex flex-row p-0">
                <DrawerClose asChild>
                  <Button className="w-full rounded-full" variant="secondary">
                    Cancelar
                  </Button>
                </DrawerClose>
                <Button
                  type="submit"
                  variant="destructive"
                  className="w-full rounded-full"
                  disabled={isPending}
                >
                  {isPending && <Loader2Icon className="animate-spin" />}
                  Finalizar
                </Button>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FinishOrderDialog
