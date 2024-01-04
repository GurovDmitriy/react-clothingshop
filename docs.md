# Docs

## Components layer

- Layout
- Page
- Domain - business
- Context - shared state & methods
- Container - logic
- UI - cleanup on props

## Folders available as global and local structure

- App
  directory next.js for routing

- Assets
  styles project global styles, images, icons, fonts

- Styles
  module scss styles

- Components
  components group

- UI
  clean components on props

- Container
  logic components

- Skeleton
  skeleton components

- Actions
  server actions and fetch

- Api
  client api, documents gql

- Hooks
  client hooks

- Hocs
  components with hoc pattern

- Types
  reusable types

- Util
  reusable function

- Tools
  reusable function with dependency project

- Gql
  generate files types for graphQL

## Convention

Component

- Layout<Default> - component layout
- Page<Home> - component page
- Container<CardUser> - logic component with fetch data and store
- UI<Card> - clean props component
- Context<Theme> - react context
- Provider<Theme> - react context provider
- Skeleton<CardUser> - skeletons

Event

- on<Click> - listener event
- handle<Submit> - handle event

Function and variable

- render<Item> - return part render
- fragment<Item> - save part component
- action<FetchUser> - server function
- use<FetchUser> - user hook
- query<FetchUser> - gql document query

Types

- I<User> - interface
- T<User> - type
- T<USER> - enum
- U<Nullish> - type utils
- MENU - constant

## Code style

- eslint
  js error

- prettier
  code style formatting
  sort imports and clean unused

- stylelint
  css formatting
  errors
  sorting css rules
