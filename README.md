# Landing Page Portfólio Multi-Nicho | Lucas Antunes

Landing page profissional de portfólio multi-nicho para freelancer de criação de sites e landing pages. Foco em conversão para WhatsApp com estrutura otimizada.

## 🚀 Stack Técnica

- **Next.js 15.1.3** (App Router)
- **React 18.3.1**
- **TypeScript 5.6.3**
- **TailwindCSS 3.4.17**
- **Lucide React** (ícones)
- **100% responsivo** (mobile-first)

## 📋 Estrutura da Página

A landing page segue a estrutura otimizada para conversão:

1. **HERO** - CTA acima da dobra
2. **OFERTA** - Planos (Starter R$ 590, Pro R$ 890, Pro+ R$ 1.190)
3. **DEMOS POR NICHO** - Tabs (desktop) + Accordion (mobile)
   - Academia & Studios (3 demos preenchidos)
   - Loja
   - Restaurante/Delivery
   - Clínica/Serviços
   - Estética/Beleza
4. **PROVA SOCIAL** - Depoimentos + transparência
5. **PROCESSO** - Como funciona em 3 passos
6. **FAQ** - Perguntas frequentes
7. **CTA FINAL** - Reforço da promessa

## ⚡ Rodando Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🔧 Personalização (TODOs Obrigatórios)

### 1. Número do WhatsApp

Abra `lib/content.ts` e altere (linha 2):

```ts
export const WHATSAPP_NUMBER = "5511999999999"; // Trocar pelo seu número
```

**Formato:** `55` + DDD + número (sem espaços, hífens ou parênteses)

### 2. URLs e Metadata

Abra `app/layout.tsx` e atualize:

- `url` do Open Graph (linha 30)
- `telephone` do JSON-LD (linha 75)
- Links de redes sociais (linha 80-82)

Abra `app/sitemap.ts` e `app/robots.ts`:

- Trocar `baseUrl` pela URL real do seu site

### 3. Screenshots das Demos

Adicione imagens reais em `public/` e atualize os caminhos em `lib/content.ts`:

```ts
image: "/screenshot-krugerbox.jpg", // Trocar por screenshot real
```

**Imagens necessárias (15 no total):**

- `/placeholder-krugerbox.jpg`
- `/placeholder-vor.jpg`
- `/placeholder-alle.jpg`
- `/placeholder-loja.jpg`
- `/placeholder-loja2.jpg`
- `/placeholder-loja3.jpg`
- (+ 9 placeholders para outros nichos)

### 4. Links das Demos

Em `lib/content.ts`, trocar `href: "#"` pelos links reais das demos:

```ts
href: "https://demo-krugerbox.vercel.app", // Trocar por link real
```

### 5. Conteúdo Editável

Todo o conteúdo está centralizado em `lib/content.ts`:

- `HERO` - Headline, subheadline, badges
- `NICHES` - Nichos com demos (cada nicho tem 3 demos)
- `PACKAGES` - Planos e preços
- `TESTIMONIALS` - Depoimentos + rating
- `PROCESS` - Passos do processo
- `FAQ` - Perguntas frequentes
- `FINAL_CTA` - CTA final

## 📁 Estrutura de Pastas

```
app/
├── layout.tsx       # Layout raiz + metadata + JSON-LD
├── page.tsx         # Home page (estrutura)
├── globals.css      # Estilos globais
├── sitemap.ts       # Sitemap para SEO
└── robots.ts        # Robots.txt

components/
├── sections/        # Seções da página
│   ├── Hero.tsx            # Hero com CTA
│   ├── Pricing.tsx         # Planos
│   ├── NicheDemos.tsx      # Demos (Tabs + Accordion)
│   ├── Testimonials.tsx    # Prova social
│   ├── Process.tsx         # Processo
│   ├── FAQ.tsx             # FAQ
│   ├── FinalCTA.tsx        # CTA final
│   └── Footer.tsx          # Rodapé
└── ui/              # Componentes reutilizáveis
    ├── accordion.tsx
    ├── button.tsx
    ├── card.tsx
    └── tabs.tsx

lib/
├── content.ts       # CONTEÚDO EDITÁVEL (trocar aqui!)
├── whatsapp.ts      # Helper para links do WhatsApp
└── utils.ts         # Utilidades (cn)
```

## ➕ Adicionando Novos Nichos

1. Abra `lib/content.ts`
2. Adicione um novo objeto ao array `NICHES`:

```ts
{
  id: "novo-nicho",
  title: "Título do Nicho",
  description: "Descrição breve do nicho e benefícios",
  demos: [
    {
      title: "Nome do Demo 1",
      tag: "DEMO / projeto conceito",
      href: "#",
      image: "/placeholder-demo1.jpg",
      bullets: [
        "Funcionalidade 1",
        "Funcionalidade 2",
        "Funcionalidade 3",
      ],
    },
    {
      title: "Nome do Demo 2",
      tag: "Em breve",
      href: "#",
      image: "/placeholder-demo2.jpg",
      bullets: [
        "Funcionalidade 1",
        "Funcionalidade 2",
        "Funcionalidade 3",
      ],
    },
    {
      title: "Nome do Demo 3",
      tag: "Em breve",
      href: "#",
      image: "/placeholder-demo3.jpg",
      bullets: [
        "Funcionalidade 1",
        "Funcionalidade 2",
        "Funcionalidade 3",
      ],
    },
  ],
},
```

## 🎯 SEO

A landing page inclui:

- **Metadata** completa (title, description, Open Graph, Twitter Card)
- **JSON-LD** com Organization schema
- **Sitemap.xml** automático
- **Robots.txt** automático
- **HTML semântico** (role, aria-labels)
- **Performance** (next/image com lazy loading)

## 🚀 Deploy

### Vercel (recomendado)

1. Push para GitHub
2. Conecte no [Vercel](https://vercel.com)
3. Deploy automático!

### Netlify

```bash
Build command: npm run build
Publish directory: .next
```

## ✅ Checklist Pré-Deploy

- [ ] Trocar `WHATSAPP_NUMBER` em `lib/content.ts`
- [ ] Atualizar URLs em `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- [ ] Adicionar screenshots reais das demos (15 imagens)
- [ ] Atualizar links das demos (`href` em `lib/content.ts`)
- [ ] Adicionar link do Instagram em `lib/content.ts` (FOOTER)
- [ ] Testar todos os links do WhatsApp
- [ ] Validar responsividade (mobile/tablet/desktop)
- [ ] Testar performance (Lighthouse)
- [ ] Configurar domínio próprio (se houver)

## 📊 Performance Targets

- APIs: < 100ms response
- Frontend: < 1.5s First Paint
- Bundle: < 1MB
- Lighthouse: 90+ em todas as métricas

## 🛠️ Solução de Problemas

### Build falha

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Imagens não aparecem

- Verificar se estão em `public/`
- Usar caminhos absolutos (`/imagem.jpg`)
- Rodar `npm run dev` novamente

### WhatsApp não abre

- Verificar formato do número: `5511999999999` (sem espaços)
- Testar em mobile real (WhatsApp precisa estar instalado)

## 📞 Suporte

Para dúvidas ou problemas:

- Verificar Node.js 18+ instalado
- Limpar cache: `rm -rf .next`
- Reinstalar: `npm install`
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentação TailwindCSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Desenvolvido com Next.js 15 + TypeScript + TailwindCSS**
