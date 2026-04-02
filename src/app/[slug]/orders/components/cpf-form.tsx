"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { PatternFormat } from "react-number-format"
import z from "zod"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
import { isValidCPF, removeCpfPunctuation } from "@/utils/constants"

const formSchema = z.object({
  cpf: z
    .string()
    .trim()
    .min(1, "CPF é obrigatório.")
    .refine((value) => isValidCPF(value), "CPF inválido."),
})

type FormSchema = z.infer<typeof formSchema>

const CpfForm = () => {
  const router = useRouter()
  const pathName = usePathname()

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormSchema) => {
    router.replace(`${pathName}?cpf=${removeCpfPunctuation(data.cpf)}`)
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <Drawer open>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Visualizar Pedidos</DrawerTitle>
            <DrawerDescription>
              Insira seu CPF abaixo para visualizar seus pedidos.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                <DrawerFooter className="mt-6 flex flex-row p-0">
                  <DrawerClose asChild>
                    <Button
                      className="w-full rounded-full"
                      variant="secondary"
                      onClick={handleCancel}
                    >
                      Cancelar
                    </Button>
                  </DrawerClose>
                  <Button
                    className="w-full rounded-full"
                    variant="destructive"
                    type="submit"
                  >
                    Confirmar
                  </Button>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CpfForm
