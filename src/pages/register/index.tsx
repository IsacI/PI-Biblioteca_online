import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FcAssistant, FcCollaboration, FcDonate, FcManager, FcAbout } from 'react-icons/fc';

interface CardProps {
  heading: string;
  imageUrl: string;
  description?: string;
  href: string;
}

const Card = ({ heading, description, href, imageUrl }: CardProps) => {
  return (
    <Link to={href}>
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            <img src={imageUrl} alt={heading} />
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <p>{description}</p>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
}

export default function CardsHome() {
  const recentesCards = [
    {
      heading: 'A arte da guerra',
      imageUrl: 'https://m.media-amazon.com/images/I/51KvntpPRpL._SY445_SX342_.jpg',
      href: 'https://doc-0g-38-docs.googleusercontent.com/docs/securesc/6s45goohcrurkg5f5vprm6oe9gg8cfff/29prm9hbh7vms6qfu39kvhithocr94p9/1697231175000/18157093437177021428/09147603113636263175/1aX8WZCxUIGd2raYLd3rkcYNM60AX5FIn?e=view&ax=AA75yW4b3ZxJtwX8Wv4fM0IoIyR7SR2yMG7uViiBfxdZxGuwUOwSs8u9kSECxXTDQ14yKSwhYPxYqYBcXN88aJaKgmzzQaVadsrY3u5st3eg3e-xnIcEtHqtyH-B9c-PFfnZR-s7NJNjVOl3uzBUmjbXVAlwx89d0IcOcFg9JiGhhKRbh-NBdVJZ9e9BT9g-IAsg2GdycVqi40zspPAutCf1JhM-RccL6xz8n4RYtFDODDVTVcA0vw34ABUQLYci1HsIgAqZ5xXSlvf4vAtAmoiHOXcSAI3WlXVNd7ahfxxPBAhUpUhkwBDKzacG-rGW573ABcCJcnknyYo975wExqJXFl73TnBx1KqzymeBGgUbxS6t_QIYAZyfxHDQokylduEWrKRE4I7TT0hh6r9XwgLyQmlwV61XoJee8QaYVijcEA1bTirKrD53WvRCyiMpprfz2JSDsSPXxfTZZZHfoFIBUQIeZ1RDXooNlP5h5RzfLF3RbfuEGG5yBmv1pIuGS5ss7xpqn4bqbaWL6awy9_P9vza8S1Symc2IS_1qeuWmtgjAM_GwKargNixG_2YzZ9FKFzcNxzyQZ3qFV08H62i_56qQ7LYGHk9Fpv_8pLbRYoJ02awqVAycLZoy-nQQl42gb7Rpnp-b4VxKtomDY90r0VkYjZIH4PEj3B7qCtP8Zt7J-Hnoo1Sft2VvAvzYpccHc0UmLlEhT46PncHEFUmgSi3CUxO_LGAqwjvgKUpKcfZjcj8yO0hJWFzvcsgoVNkOOfx5PPXT-3v_zR3YGj6do6TZ5H-BFyb0ay2iBZ-bMHWYKpwFeiTH8i-ql2HF4Gi9oXbdWITYfEKZmoZZSobnXPkQYPA0_ts7bLDRESblrqTxwJDeRTw0-Ri37mXFhscio5LDyzJTsoWyBzGUlLvUs4c0JDouohM97MvD80-a32H1mYE6NBKA6Fys6Sf7LGGZ-ABTDPQIiyVIdjTpn9XRGrb8cnyMJY_-FlF6A3sQMUx2ua6Nv-rKn90EhUqSscF8HO5L-l5ooy_dkwr2UJB_BtzELCrj2oFdZwdFbw14bLWu_3IqLA6tBJG8KKPBFkZb4rXXM1qJYhz957Bbwtkk&uuid=3dd9204c-a014-4e23-b9a6-f9f8a20d26f7&authuser=0&nonce=0tucm4cd30peo&user=09147603113636263175&hash=h57pu3k7fcq3mkirbvo7nrqe38tq4t4n',
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
      }, 
  ];

  const classicosCards = [
    {
      heading: 'A arte da guerra',
      imageUrl: 'https://m.media-amazon.com/images/I/51KvntpPRpL._SY445_SX342_.jpg',
      href: 'https://doc-0g-38-docs.googleusercontent.com/docs/securesc/6s45goohcrurkg5f5vprm6oe9gg8cfff/29prm9hbh7vms6qfu39kvhithocr94p9/1697231175000/18157093437177021428/09147603113636263175/1aX8WZCxUIGd2raYLd3rkcYNM60AX5FIn?e=view&ax=AA75yW4b3ZxJtwX8Wv4fM0IoIyR7SR2yMG7uViiBfxdZxGuwUOwSs8u9kSECxXTDQ14yKSwhYPxYqYBcXN88aJaKgmzzQaVadsrY3u5st3eg3e-xnIcEtHqtyH-B9c-PFfnZR-s7NJNjVOl3uzBUmjbXVAlwx89d0IcOcFg9JiGhhKRbh-NBdVJZ9e9BT9g-IAsg2GdycVqi40zspPAutCf1JhM-RccL6xz8n4RYtFDODDVTVcA0vw34ABUQLYci1HsIgAqZ5xXSlvf4vAtAmoiHOXcSAI3WlXVNd7ahfxxPBAhUpUhkwBDKzacG-rGW573ABcCJcnknyYo975wExqJXFl73TnBx1KqzymeBGgUbxS6t_QIYAZyfxHDQokylduEWrKRE4I7TT0hh6r9XwgLyQmlwV61XoJee8QaYVijcEA1bTirKrD53WvRCyiMpprfz2JSDsSPXxfTZZZHfoFIBUQIeZ1RDXooNlP5h5RzfLF3RbfuEGG5yBmv1pIuGS5ss7xpqn4bqbaWL6awy9_P9vza8S1Symc2IS_1qeuWmtgjAM_GwKargNixG_2YzZ9FKFzcNxzyQZ3qFV08H62i_56qQ7LYGHk9Fpv_8pLbRYoJ02awqVAycLZoy-nQQl42gb7Rpnp-b4VxKtomDY90r0VkYjZIH4PEj3B7qCtP8Zt7J-Hnoo1Sft2VvAvzYpccHc0UmLlEhT46PncHEFUmgSi3CUxO_LGAqwjvgKUpKcfZjcj8yO0hJWFzvcsgoVNkOOfx5PPXT-3v_zR3YGj6do6TZ5H-BFyb0ay2iBZ-bMHWYKpwFeiTH8i-ql2HF4Gi9oXbdWITYfEKZmoZZSobnXPkQYPA0_ts7bLDRESblrqTxwJDeRTw0-Ri37mXFhscio5LDyzJTsoWyBzGUlLvUs4c0JDouohM97MvD80-a32H1mYE6NBKA6Fys6Sf7LGGZ-ABTDPQIiyVIdjTpn9XRGrb8cnyMJY_-FlF6A3sQMUx2ua6Nv-rKn90EhUqSscF8HO5L-l5ooy_dkwr2UJB_BtzELCrj2oFdZwdFbw14bLWu_3IqLA6tBJG8KKPBFkZb4rXXM1qJYhz957Bbwtkk&uuid=3dd9204c-a014-4e23-b9a6-f9f8a20d26f7&authuser=0&nonce=0tucm4cd30peo&user=09147603113636263175&hash=h57pu3k7fcq3mkirbvo7nrqe38tq4t4n',
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
      }, 
  ];

  const maisLidosCards = [

    {
      heading: 'A arte da guerra',
      imageUrl: 'https://m.media-amazon.com/images/I/51KvntpPRpL._SY445_SX342_.jpg',
      href: 'https://doc-0g-38-docs.googleusercontent.com/docs/securesc/6s45goohcrurkg5f5vprm6oe9gg8cfff/29prm9hbh7vms6qfu39kvhithocr94p9/1697231175000/18157093437177021428/09147603113636263175/1aX8WZCxUIGd2raYLd3rkcYNM60AX5FIn?e=view&ax=AA75yW4b3ZxJtwX8Wv4fM0IoIyR7SR2yMG7uViiBfxdZxGuwUOwSs8u9kSECxXTDQ14yKSwhYPxYqYBcXN88aJaKgmzzQaVadsrY3u5st3eg3e-xnIcEtHqtyH-B9c-PFfnZR-s7NJNjVOl3uzBUmjbXVAlwx89d0IcOcFg9JiGhhKRbh-NBdVJZ9e9BT9g-IAsg2GdycVqi40zspPAutCf1JhM-RccL6xz8n4RYtFDODDVTVcA0vw34ABUQLYci1HsIgAqZ5xXSlvf4vAtAmoiHOXcSAI3WlXVNd7ahfxxPBAhUpUhkwBDKzacG-rGW573ABcCJcnknyYo975wExqJXFl73TnBx1KqzymeBGgUbxS6t_QIYAZyfxHDQokylduEWrKRE4I7TT0hh6r9XwgLyQmlwV61XoJee8QaYVijcEA1bTirKrD53WvRCyiMpprfz2JSDsSPXxfTZZZHfoFIBUQIeZ1RDXooNlP5h5RzfLF3RbfuEGG5yBmv1pIuGS5ss7xpqn4bqbaWL6awy9_P9vza8S1Symc2IS_1qeuWmtgjAM_GwKargNixG_2YzZ9FKFzcNxzyQZ3qFV08H62i_56qQ7LYGHk9Fpv_8pLbRYoJ02awqVAycLZoy-nQQl42gb7Rpnp-b4VxKtomDY90r0VkYjZIH4PEj3B7qCtP8Zt7J-Hnoo1Sft2VvAvzYpccHc0UmLlEhT46PncHEFUmgSi3CUxO_LGAqwjvgKUpKcfZjcj8yO0hJWFzvcsgoVNkOOfx5PPXT-3v_zR3YGj6do6TZ5H-BFyb0ay2iBZ-bMHWYKpwFeiTH8i-ql2HF4Gi9oXbdWITYfEKZmoZZSobnXPkQYPA0_ts7bLDRESblrqTxwJDeRTw0-Ri37mXFhscio5LDyzJTsoWyBzGUlLvUs4c0JDouohM97MvD80-a32H1mYE6NBKA6Fys6Sf7LGGZ-ABTDPQIiyVIdjTpn9XRGrb8cnyMJY_-FlF6A3sQMUx2ua6Nv-rKn90EhUqSscF8HO5L-l5ooy_dkwr2UJB_BtzELCrj2oFdZwdFbw14bLWu_3IqLA6tBJG8KKPBFkZb4rXXM1qJYhz957Bbwtkk&uuid=3dd9204c-a014-4e23-b9a6-f9f8a20d26f7&authuser=0&nonce=0tucm4cd30peo&user=09147603113636263175&hash=h57pu3k7fcq3mkirbvo7nrqe38tq4t4n',
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
      }, 
  ];

  const poesiasCards = [
    {
      heading: 'A arte da guerra',
      imageUrl: 'https://m.media-amazon.com/images/I/51KvntpPRpL._SY445_SX342_.jpg',
      href: 'https://doc-0g-38-docs.googleusercontent.com/docs/securesc/6s45goohcrurkg5f5vprm6oe9gg8cfff/29prm9hbh7vms6qfu39kvhithocr94p9/1697231175000/18157093437177021428/09147603113636263175/1aX8WZCxUIGd2raYLd3rkcYNM60AX5FIn?e=view&ax=AA75yW4b3ZxJtwX8Wv4fM0IoIyR7SR2yMG7uViiBfxdZxGuwUOwSs8u9kSECxXTDQ14yKSwhYPxYqYBcXN88aJaKgmzzQaVadsrY3u5st3eg3e-xnIcEtHqtyH-B9c-PFfnZR-s7NJNjVOl3uzBUmjbXVAlwx89d0IcOcFg9JiGhhKRbh-NBdVJZ9e9BT9g-IAsg2GdycVqi40zspPAutCf1JhM-RccL6xz8n4RYtFDODDVTVcA0vw34ABUQLYci1HsIgAqZ5xXSlvf4vAtAmoiHOXcSAI3WlXVNd7ahfxxPBAhUpUhkwBDKzacG-rGW573ABcCJcnknyYo975wExqJXFl73TnBx1KqzymeBGgUbxS6t_QIYAZyfxHDQokylduEWrKRE4I7TT0hh6r9XwgLyQmlwV61XoJee8QaYVijcEA1bTirKrD53WvRCyiMpprfz2JSDsSPXxfTZZZHfoFIBUQIeZ1RDXooNlP5h5RzfLF3RbfuEGG5yBmv1pIuGS5ss7xpqn4bqbaWL6awy9_P9vza8S1Symc2IS_1qeuWmtgjAM_GwKargNixG_2YzZ9FKFzcNxzyQZ3qFV08H62i_56qQ7LYGHk9Fpv_8pLbRYoJ02awqVAycLZoy-nQQl42gb7Rpnp-b4VxKtomDY90r0VkYjZIH4PEj3B7qCtP8Zt7J-Hnoo1Sft2VvAvzYpccHc0UmLlEhT46PncHEFUmgSi3CUxO_LGAqwjvgKUpKcfZjcj8yO0hJWFzvcsgoVNkOOfx5PPXT-3v_zR3YGj6do6TZ5H-BFyb0ay2iBZ-bMHWYKpwFeiTH8i-ql2HF4Gi9oXbdWITYfEKZmoZZSobnXPkQYPA0_ts7bLDRESblrqTxwJDeRTw0-Ri37mXFhscio5LDyzJTsoWyBzGUlLvUs4c0JDouohM97MvD80-a32H1mYE6NBKA6Fys6Sf7LGGZ-ABTDPQIiyVIdjTpn9XRGrb8cnyMJY_-FlF6A3sQMUx2ua6Nv-rKn90EhUqSscF8HO5L-l5ooy_dkwr2UJB_BtzELCrj2oFdZwdFbw14bLWu_3IqLA6tBJG8KKPBFkZb4rXXM1qJYhz957Bbwtkk&uuid=3dd9204c-a014-4e23-b9a6-f9f8a20d26f7&authuser=0&nonce=0tucm4cd30peo&user=09147603113636263175&hash=h57pu3k7fcq3mkirbvo7nrqe38tq4t4n',
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
      }, 
  ];

  const maisAvaliadosCards = [
    {
      heading: 'A arte da guerra',
      imageUrl: 'https://m.media-amazon.com/images/I/51KvntpPRpL._SY445_SX342_.jpg',
      href: 'https://doc-0g-38-docs.googleusercontent.com/docs/securesc/6s45goohcrurkg5f5vprm6oe9gg8cfff/29prm9hbh7vms6qfu39kvhithocr94p9/1697231175000/18157093437177021428/09147603113636263175/1aX8WZCxUIGd2raYLd3rkcYNM60AX5FIn?e=view&ax=AA75yW4b3ZxJtwX8Wv4fM0IoIyR7SR2yMG7uViiBfxdZxGuwUOwSs8u9kSECxXTDQ14yKSwhYPxYqYBcXN88aJaKgmzzQaVadsrY3u5st3eg3e-xnIcEtHqtyH-B9c-PFfnZR-s7NJNjVOl3uzBUmjbXVAlwx89d0IcOcFg9JiGhhKRbh-NBdVJZ9e9BT9g-IAsg2GdycVqi40zspPAutCf1JhM-RccL6xz8n4RYtFDODDVTVcA0vw34ABUQLYci1HsIgAqZ5xXSlvf4vAtAmoiHOXcSAI3WlXVNd7ahfxxPBAhUpUhkwBDKzacG-rGW573ABcCJcnknyYo975wExqJXFl73TnBx1KqzymeBGgUbxS6t_QIYAZyfxHDQokylduEWrKRE4I7TT0hh6r9XwgLyQmlwV61XoJee8QaYVijcEA1bTirKrD53WvRCyiMpprfz2JSDsSPXxfTZZZHfoFIBUQIeZ1RDXooNlP5h5RzfLF3RbfuEGG5yBmv1pIuGS5ss7xpqn4bqbaWL6awy9_P9vza8S1Symc2IS_1qeuWmtgjAM_GwKargNixG_2YzZ9FKFzcNxzyQZ3qFV08H62i_56qQ7LYGHk9Fpv_8pLbRYoJ02awqVAycLZoy-nQQl42gb7Rpnp-b4VxKtomDY90r0VkYjZIH4PEj3B7qCtP8Zt7J-Hnoo1Sft2VvAvzYpccHc0UmLlEhT46PncHEFUmgSi3CUxO_LGAqwjvgKUpKcfZjcj8yO0hJWFzvcsgoVNkOOfx5PPXT-3v_zR3YGj6do6TZ5H-BFyb0ay2iBZ-bMHWYKpwFeiTH8i-ql2HF4Gi9oXbdWITYfEKZmoZZSobnXPkQYPA0_ts7bLDRESblrqTxwJDeRTw0-Ri37mXFhscio5LDyzJTsoWyBzGUlLvUs4c0JDouohM97MvD80-a32H1mYE6NBKA6Fys6Sf7LGGZ-ABTDPQIiyVIdjTpn9XRGrb8cnyMJY_-FlF6A3sQMUx2ua6Nv-rKn90EhUqSscF8HO5L-l5ooy_dkwr2UJB_BtzELCrj2oFdZwdFbw14bLWu_3IqLA6tBJG8KKPBFkZb4rXXM1qJYhz957Bbwtkk&uuid=3dd9204c-a014-4e23-b9a6-f9f8a20d26f7&authuser=0&nonce=0tucm4cd30peo&user=09147603113636263175&hash=h57pu3k7fcq3mkirbvo7nrqe38tq4t4n',
    },
    {
      heading: 'Harry Potter E As Reliquias Da Morte Parte 1',
      imageUrl: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_043f916aa9efbb0688b45a7b43237130bfcc0a79.jpg',
      href:'https://escolaluizaugusto.com.br/home/wp-content/uploads/2020/06/J.-K.-Rowling-Harry-Potter-e-as-Relíquias-da-Morte-Oficial-1.pdf',
    },
      {
        heading: 'O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL',
        imageUrl: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-A-Sociedade-do-Anel-–-O-Senhor-dos-Anéis-–-Vol-1.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: AS DUAS TORRES',
        imageUrl: 'https://m.media-amazon.com/images/I/81lQ5N0QwJL._SY342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-As-Duas-Torres-–-O-Senhor-dos-Anéis-–-Vol-2.pdf',
      },
      {
        heading: 'O SENHOR DOS ANÉIS: O RETORNO DO REI',
        imageUrl: 'https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_.jpg',
        href: 'http://cabana-on.com/Ler/wp-content/uploads/2017/08/J.R.R.-Tolkien-O-Retorno-do-Rei-–-O-Senhor-Dos-Anéis-Vol.-3.pdf',
      }, 
  ];

  return (
    <Container maxW={'90%'} mt={12}>
      <Flex justify="space-between">
        <Heading size="lg">Recentes</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {recentesCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Classicos</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {classicosCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Mais Lidos</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {maisLidosCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Poesias</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {poesiasCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Mais Avaliados</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {maisAvaliadosCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>
    </Container>
  );
}