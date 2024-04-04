"use client";
import React, { useState } from "react";
import { Input, InputProps } from "./ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { InputWithButton } from "./ui/InputWithButton";

interface Props extends InputProps {}

const formSchema = z.object({
  playerName: z.string().includes("#"),
});
const LinkInput: React.FC<Props> = ({ ...args }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    navigateToAccountPage(values.playerName);
  };

  const navigateToAccountPage = (playerName: string) => {
    const [gameName, tagLine] = playerName.split("#");
    router.push(`account/${gameName};${tagLine}`);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="playerName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithButton placeholder="Game Name + #EUW" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default LinkInput;
